
type Props = {
  myProp: string;
};

const ReactForm = ({ myProp }: Props) => {

  return (
    <form name={myProp}></form>
  )
}

export default ReactForm;