import * as React from 'react'
import {track} from 'utils/analytics'

export const useTrackComponent = (event: string, properties: any = {}) => {
  React.useEffect(() => {
    track(event, properties)
  }, [])
}
