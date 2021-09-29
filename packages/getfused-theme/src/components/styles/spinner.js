import { styled } from "frontity"
import Spin from './spin'

const Spinner = styled.div`
  border: 12px solid #eee;
  border-top: 12px solid steelblue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${Spin} 2s linear infinite;
`
export default Spinner;