import { ReactNode } from 'react'

interface ContainerInterface {
  children: ReactNode
}

export default function Container({ children }: ContainerInterface) {
  return (
    <div className="m-auto md:max-w-[768px] lg:max-w-[1440px]">{children}</div>
  )
}
