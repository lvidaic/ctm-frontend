import Input from '../components/Input.jsx';
import TextArea from '../components/TextArea.jsx';
import Selectbox from '../components/Selectbox.jsx';
import FileUpload from '../components/FileUpload.jsx';
import ImageUpload from '../components/ImageUpload.jsx';

export default function Provider() {
    return (
        <div className='container mx-auto max-w-2xl'>
            <div className='text-2xl my-5'>Hi there from provider</div>
            <div className="flex flex-col gap-y-3">
                <Input labelText="Email" inputType='email' onChange={(e) => console.log(e.target.value)} />
                <TextArea labelText="Simple text" />
                <Selectbox elements={["Croatia", "Germany", "Ireland"]} onChange={e => console.log(e.target.value)} />
                <FileUpload />
                <ImageUpload labelText="Profile photo" />

            </div>
        </div>)
}
