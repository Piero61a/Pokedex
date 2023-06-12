import style from './ViewContainer.module.sass'
import { ReactNode, FC } from 'react'

interface ViewContainerProps {
  children: ReactNode;
}

export const ViewContainer: FC<ViewContainerProps> = ({ children }) => {
  return (
    <div className={style.viewContainer}>
      { children }
    </div>
  )
}