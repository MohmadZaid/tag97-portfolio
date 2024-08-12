import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';

@Component({
  selector: 'tag97-service-section',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss',
})
export class ServiceSectionComponent {
  public isModalOpen = false;
  public modalTitle!: string;
  public modalDescription!: string;

  public services = [
    {
      title: 'UI & Graphic Design',
      description:
        "In today's digital landscape, first impressions are everything. Our UI & Graphic Design services ensure that your brand not only stands out but also provides an intuitive and engaging experience for your users. From sleek and modern interfaces to visually striking graphics, we create designs that are both aesthetically pleasing and functionally sound.    Our approach is rooted in understanding your brand identity and audience, translating your vision into a cohesive visual narrative. Whether you're looking to refresh your website, develop a mobile app, or create stunning marketing materials, our team of creative experts will deliver designs that captivate and convert.",
      image: 'assets/services/design-development.svg',
    },
    {
      title: 'Website Development',
      description:
        'Your website is the digital front door to your business, and we’re here to ensure it’s built to impress. Our Website Development services combine cutting-edge technology with user-centric design to create fast, responsive, and secure websites that drive results. Whether you need a robust e-commerce platform, a sleek corporate site, or a dynamic web application, our development team has the expertise to bring your vision to life. We focus on clean, efficient code and seamless user experiences, ensuring your website performs flawlessly across all devices. From concept to deployment, we work closely with you to develop a site that not only meets your business needs but also provides a strong foundation for future growth.',
      image: 'assets/services/saving-strategy.svg',
    },
    {
      title: 'Application Development',
      description:
        'In a world where mobile and web applications are essential to business success, our Application Development services offer innovative solutions that meet your unique needs. We specialize in building custom applications that are scalable, secure, and tailored to your specific goals—whether it’s a mobile app, a web application, or a complex enterprise system. Our development process is collaborative and transparent, ensuring that your app not only functions flawlessly but also provides an exceptional user experience. We leverage the latest technologies and frameworks to deliver applications that are robust, fast, and future-proof. From initial concept through deployment and beyond, we’re dedicated to turning your ideas into powerful, real-world applications that drive your business forward.',
      image: 'assets/services/growth-strategy.svg',
    },
    {
      title: 'Software Development',
      description:
        'The stages are often referred to collectively as the software development life-cycle.',
      image: 'assets/services/digital-marketing.svg',
    },
    {
      title: 'Development Outsourcing',
      description:
        'Maximize efficiency and access top-tier talent with our Development Outsourcing services. Whether you need to scale your team, accelerate project timelines, or tap into specialized expertise, we offer flexible outsourcing solutions tailored to your needs. Our experienced developers integrate seamlessly with your in-house team, bringing technical excellence and a commitment to quality. We handle everything from full project management to specific development tasks, ensuring that your projects are delivered on time, within budget, and to the highest standards. With our outsourcing services, you can focus on your core business while we take care of the development, providing you with a cost-effective way to achieve your goals and maintain a competitive edge in the market.',
      image: 'assets/services/digital-strategy.svg',
    },
    {
      title: 'Hosting & Deployment',
      description:
        "Ensure your digital assets are always online, secure, and performing at their best with our Hosting & Deployment services. We provide reliable and scalable hosting solutions tailored to your needs, whether you're running a small website or a complex application. Our team handles the entire deployment process, ensuring a smooth transition from development to live environments with minimal downtime. We focus on optimizing performance, enhancing security, and ensuring high availability, so your site or application remains accessible and responsive to users around the clock. From server management to continuous monitoring, we provide comprehensive support to keep your digital infrastructure running efficiently. Trust us to deliver a seamless hosting and deployment experience, so you can focus on growing your business.",
      image: 'assets/services/digital-marketing.svg',
    },
  ];

  bgImagePaths = [
    'assets/services/servicesBg/asset s1.png',
    'assets/services/servicesBg/asset s2.png',
    'assets/services/servicesBg/asset s3.png',
    'assets/services/servicesBg/asset s4.png',
  ];

  getBgImage(index: number): string {
    return this.bgImagePaths[index % this.bgImagePaths.length];
  }

  modalOpen(service: any) {
    this.isModalOpen = true;
    this.modalTitle = service.title
    this.modalDescription = service.description
  }
}
