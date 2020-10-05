import React from 'react'
import { AppProps } from 'next/app'

import ThemeContainer from '../contexts/theme/ThemeContainer'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default App
