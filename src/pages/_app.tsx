/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import '@/styles/tailwind.css'
import { API_TOKEN_STORYBLOK } from '@/config'
// @ts-ignore
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import Title from '@/components/Example/Title'
import Content from '@/components/Example/Content'

const components = {
  title: Title,
  content: Content,
}

storyblokInit({
  accessToken: API_TOKEN_STORYBLOK,
  use: [apiPlugin],
  components,
  bridge: true,
})

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
