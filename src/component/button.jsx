import '../App.css';


export default function Button(props) {
  return (
    <button className="bg-[#B34B1E] btn text-center">
        {props.children}
      </button>
  )
}
