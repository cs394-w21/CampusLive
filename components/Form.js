import Base from "./Forms/Form";
import FormField from "./Forms/FormField";
import FormButton from "./Forms/FormButton";
import FormErrorMessage from "./Forms/FormErrorMessage";
import FormSwitch from "./Forms/FormSwitch";
import FormEventImage from "./Forms/FormEventImage";

const Form = (props) => Base(props);

Form.Field = FormField;
Form.Button = FormButton;
Form.ErrorMessage = FormErrorMessage;
Form.Switch = FormSwitch;
Form.EventImage = FormEventImage;

export default Form;
