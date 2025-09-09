// Generates an RSS feed for blog posts using the 'rss' library.
// This utility pulls post data and outputs a standards-compliant RSS XML feed for syndication.

import Rss from 'rss';
import { settings } from '@/utils/settings.mjs';
import pkg from 'next/package.json';
import postService from '@/utils/PostService';

/**
 * @name getPostFeed
 * @description Get all post feed
 * @param {Post[]}
 * @returns {Rss}
 */
const getPostFeed = (posts = []) => {
    // set feed values
    const feed = new Rss({
        title: settings.title,
        description: settings.description,
        site_url: settings.siteUrl,
        feed_url: `${settings.siteUrl}/feed/posts.xml`,
        language: 'en',
        copyright:
            'All rights reserved, ' + new Date().getFullYear() + ' ' + settings.title,
        pubDate: new Date(),
    });

    // get the post data
    posts = posts.length > 0 ? posts : postService.getPosts();

    posts.map((post) => {
        // add the post to the feed
        feed.item({
            title: post.title,
            description: post.content,
            guid: `${settings.siteUrl}/post/${post.slug}`,
            url: `${settings.siteUrl}/post/${post.slug}`,
            date: post.created,
            author: post.author || settings.author,
            categories: post.tags.split(',') || [],
        });
    });

    // return the feed
    return feed;
};

export { getPostFeed };
