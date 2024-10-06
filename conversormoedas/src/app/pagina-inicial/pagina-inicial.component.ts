import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

declare var WOW: any;

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.setupPreloader();
    this.setupStickyNavbar();
    this.setupScrollMenu();
    this.setupSmoothScroll();
    this.setupMobileMenu();
    new WOW().init();
  }

  private setupPreloader() {
    window.onload = () => {
      setTimeout(() => this.fadeout(), 500);
    };
  }

  private fadeout() {
    const preloader = this.el.nativeElement.querySelector('.preloader');
    this.renderer.setStyle(preloader, 'opacity', '0');
    this.renderer.setStyle(preloader, 'display', 'none');
  }

  private setupStickyNavbar() {
    const headerNavbar = this.el.nativeElement.querySelector(".navbar-area");
    const logo = this.el.nativeElement.querySelector('.navbar-brand img');
    const sticky = headerNavbar.offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset > sticky) {
        headerNavbar.classList.add("sticky");
        logo.src = 'assets/images/logo/logo.svg';
      } else {
        headerNavbar.classList.remove("sticky");
        logo.src = 'assets/images/logo/white-logo.svg';
      }

      const backToTop = this.el.nativeElement.querySelector(".scroll-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.renderer.setStyle(backToTop, 'display', 'flex');
      } else {
        this.renderer.setStyle(backToTop, 'display', 'none');
      }
    };
  }

  private setupScrollMenu() {
    const sections = this.el.nativeElement.querySelectorAll('.page-scroll');
    window.document.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      sections.forEach((currLink: Element) => {
        const val = currLink.getAttribute('href');
        const refElement = this.el.nativeElement.querySelector(val);
        const scrollTopMinus = scrollPos + 73;

        if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
          sections.forEach((link: Element) => this.renderer.removeClass(link, 'active'));
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      });
    });
  }

  private setupSmoothScroll() {
    const pageLinks = this.el.nativeElement.querySelectorAll('.page-scroll');

    pageLinks.forEach((elem: Element) => {
      elem.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const target = this.el.nativeElement.querySelector(elem.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }

  private setupMobileMenu() {
    const navbarToggler = this.el.nativeElement.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', () => {
      if (navbarToggler.classList.contains("active")) {
        this.renderer.removeClass(navbarToggler, "active");
      } else {
        this.renderer.addClass(navbarToggler, "active");
      }
    });
  }
}
