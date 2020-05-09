import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {MetaTag} from '../models/meta-tag.model';
import {APP_BASE_HREF, DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TitleTagService {

  private urlMeta = 'og:url';
  private titleMeta = 'og:title';
  private descriptionMeta = 'og:description';
  private imageMeta = 'og:image';
  private secureImageMeta = 'og:image:secure_url';
  private twitterTitleMeta = 'twitter:text:title';
  private twitterImageMeta = 'twitter:image';

  constructor(private titleService: Title,
              private metaService: Meta,
              @Inject(APP_BASE_HREF) public baseHref: string,
              @Inject(DOCUMENT) private doc) { }

  get baseLink() {
    return `${location.origin}${this.baseHref}`;
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public setSocialMediaTags(url: string, title: string, description: string, image: string): void {
    const tags = [
      new MetaTag(this.urlMeta, url, true),
      new MetaTag(this.titleMeta, title, true),
      new MetaTag(this.descriptionMeta, description, true),
      new MetaTag(this.imageMeta, image, true),
      new MetaTag(this.secureImageMeta, image, true),
      new MetaTag(this.twitterTitleMeta, title, false),
      new MetaTag(this.twitterImageMeta, image, false)
    ];
    this.setTags(tags);
    this.createLinkForCanonicalURL(url);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => {
      siteTag.isFacebook ?
        this.metaService.getTag(`property='${siteTag.name}'`) :
        this.metaService.getTag(`name='${siteTag.name}'`);
      if (siteTag.isFacebook) {
        this.metaService.updateTag({ property: siteTag.name, content: siteTag.value });
      } else {
        this.metaService.updateTag({ name: siteTag.name, content: siteTag.value });
      }
    });
  }

  createLinkForCanonicalURL(url: string) {
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', url);
  }

}
