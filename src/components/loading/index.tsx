import type { PropsWithChildren } from 'react'
import style from './index.module.scss'
import Info from '@/components/info'

export default function Loading({ children }: PropsWithChildren) {
  const ball = 72

  return (
    <div className={style.contianer}>
      <div
        className={style.content}
        style={{ '--total': ball } as React.CSSProperties}
      >
        {new Array(ball).fill(0).map((_, index) => (
          <div
            key={index}
            className={style.ball_container}
            style={{ '--index': index } as React.CSSProperties}
          >
            <div className={style.ball}></div>
          </div>
        ))}
        <Info className={style.info} />
      </div>
      {children}
    </div>
  )
}
