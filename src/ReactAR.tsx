import React, { createRef } from 'react'
import ReactDOM from 'react-dom'

import '@google/model-viewer'

import { ModelViewer, activateAR } from '@r2u/react-ar-components'
import type { ModelViewerElement } from '@r2u/react-ar-components'

import style from './style.module.css'

const App: React.FC = () => {
  const usdz = 'http://localhost:8080/mesh_01000.usdz'
  const glb = 'http://localhost:8080/mesh_01000.glb'
  const imageUrl = 'https://via.placeholder.com/150'
  const viewerRef = createRef<ModelViewerElement>()

  return (
    <div>
      <div>
        <h1>AR</h1>
        <button type="button" onClick={() => activateAR({ glb, usdz })}>
          View in 3D
        </button>
      </div>
      <div>
        <h1>ModelViewer</h1>
        <ModelViewer
          ref={viewerRef}
          src={glb}
          alt="3D model"
          style={style}
          poster={imageUrl}
        />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))