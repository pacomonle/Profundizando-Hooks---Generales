import { useState } from "react"


const useForm = (initialState = {}) => {
   
const [formValue, setformValue] = useState(initialState)

const handleInputChange = ({target}) => {
   
    setformValue({
        ...formValue,
        [target.name] : target.value
    })
}

return [formValue, setformValue,  handleInputChange]

}

export default useForm
