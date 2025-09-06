// components/PostItem.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PostItem.module.scss';
import { Post as PostType } from '@/utils/types';

interface PostItemProps {
    post: PostType;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const tags = Array.isArray(post.tags) ? post.tags : [post.tags]; // Convert tags to an array

    return (
        <div className={`${styles.postItem} postItem`}>
            <Link href={`/post/${post.slug}`}>
				<span className={`${styles.postThumb} postThumb`}>
					<Image src={post.image} alt={post.title} width={320} height={180} />
				</span>

                <span className={`${styles.postDetails} postDetails`}>
					<ul>
						{/* TODO: Change tags into buttons linking to the blog */}
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
					</ul>
					<h3>{post.title}</h3>
					<p>{post.description}</p>
				</span>
            </Link>
        </div>
    );
};

export default PostItem;
