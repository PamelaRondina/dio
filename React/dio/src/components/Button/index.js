/*export default function Button({title}) {
  return (
    <button>{title}</button>
  )
}*/

export default function Button(props) {
const { title } = props;

    return       <button>{title}</button>;
}