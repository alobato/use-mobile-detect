import { useLayoutEffect } from 'react'

const mobileDetect = userAgent => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))

  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => !isMobile()

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos
  }
}

export default () => {
  useLayoutEffect(() => {
    const { isMobile, isDesktop, isAndroid, isIos } = mobileDetect(navigator.userAgent)
    if (isMobile()) document.body.classList.add('mobile')
    if (isIos()) document.body.classList.add('ios')
    if (isAndroid()) document.body.classList.add('android')
    if (isDesktop()) document.body.classList.add('desktop')
  }, [])
}
