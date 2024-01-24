import { TitleStoryblok } from '@/types/storyblok-bloks/storyblok-bloks-types'
import React, { FC } from 'react'

interface TitleProps {
  blok: TitleStoryblok
}

const Title: FC<TitleProps> = ({ blok }) => <p>{blok.title}</p>

export default Title
