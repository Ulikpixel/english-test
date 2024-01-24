import { ContentStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import { StoryblokComponent } from '@storyblok/react'
import React, { FC } from 'react'

interface ContentProps {
  blok: ContentStoryblok
}

const Content: FC<ContentProps> = ({ blok }) => (
  <>
    {blok.list.map((nestedBlok) => (
      // eslint-disable-next-line no-underscore-dangle
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </>
)

export default Content
