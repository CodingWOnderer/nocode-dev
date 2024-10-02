"use client"
import { type Row } from '@tanstack/react-table'
import React from 'react'
import { BlogListType } from '../../validations/schema'
import useBlogStore from '@/hooks/use-blog-store'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface PublishBlogDailogProps {
    blog: Row<BlogListType>["original"]
}

export const PublishButton = ({ blog }: PublishBlogDailogProps) => {
    const published = useBlogStore((state) => state.getBlogFromSlug);
    const setPublished = useBlogStore((state) => state.setBlogList);


    const isPublished = published(blog.slug)


    if (isPublished && isPublished?.publish === true) return <Badge className='bg-primary/20 transition-all text-primary border-primary hover:bg-primary/40'>Published</Badge>;

    const handlePublish: React.MouseEventHandler<HTMLButtonElement> | undefined = (event) => {
        event.stopPropagation()
        console.log(published)
        if (isPublished) setPublished({ ...isPublished, publish: true });
    };

    return <Button type="button" size={"sm"} onClick={handlePublish}>Publish</Button>;
}

