'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      {/* <div className="cn-contactform-input ">
        <label>Name</label>
        <input id='name' {...register("name")} type="text" placeholder="John Doe" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Subject</label>
        <input id='subject' {...register("subject")} type="text" placeholder="Your@email.com" />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Submit
        </button>
      </div> */}
<div className='divwrap '>
 <div className="cn-contactform-input ">
        {/* <label>Name</label> */}
        <input id='name' type="text" placeholder="John " />
        {/* <ErrorMsg msg={errors.name?.message!} /> */}
      </div>
       <div className="cn-contactform-input ">
        {/* <label>Name</label> */}
        <input id='Lastname' type="text" placeholder=" Doe" />
        {/* <ErrorMsg msg={errors.name?.message!} /> */}
      </div>
</div>

<div className="cn-contactform-input ">
        <input id='CompanyName' type="text" placeholder="Company name" />
      </div>

      <div className="cn-contactform-input ">
        <input id='Email' type="text" placeholder="Email" />
      </div>
     
       <div className="cn-contactform-input ">
        <input id='PhoneNumber' type="tel" placeholder="Phone number" />
      </div>

      <div className="cn-contactform-input ">
        <input id='HowCan' type="text" placeholder="How Can We Help?" />
      </div>

       <div className="cn-contactform-input">
        <textarea id='message' {...register("message")} placeholder="Tell Us About Your Project"></textarea>
      </div>


      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Submit
        </button>
        </div>
    </form>
  );
}
