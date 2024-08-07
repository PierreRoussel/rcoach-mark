import Link from 'next/link';
import { draftMode } from 'next/headers';

import Date from './date';
import CoverImage from './cover-image';
import Avatar from './avatar';
import MoreStories from './more-stories';

import { getAllPosts } from '@/lib/api';
import Hero from '@/pages/home/Hero';
import SocialProof from '@/pages/home/SocialProof';
import OtherFeatures from '@/pages/home/OtherFeatures';
import MainFeatures from '@/pages/home/MainFeatures';

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className='d-flex flex-column flex-gap-xxl'>
      <Hero />
      <SocialProof />
      <MainFeatures />
      <div style={{ 'height': '500px' }}></div>
      <OtherFeatures />
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )} */}
      {/* <MoreStories morePosts={morePosts} /> */}
      <div style={{ 'height': '500px' }}></div>
    </div>
  );
}
