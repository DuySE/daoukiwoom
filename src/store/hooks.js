import { useContext } from 'react';
import CurrentUserContext from './Context'

export const useStore = () => {
  const [state, dispatch] = useContext(CurrentUserContext)
  return [state, dispatch]
}