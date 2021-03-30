import React from "react";
import { useForm } from "react-hook-form";
import { postPosts } from "./services/index_ex";
import { toast } from "react-toastify";

const CreatePost = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = async (data) => {
        try {
            await postPosts(data);
            toast.success("Enviado com sucesso!");
        } catch (error) {
            toast.error("Ops! Algo deu errado!");
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Usuário
            </label>
            <input type="text" name="userId" ref={register} /><br></br>
            <label>
                Título
            </label>
            <input type="text" name="title" ref={register} /><br></br>
            <label>
                Descrição
            </label>
            <input type="text" name="body" ref={register} /><br></br>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default CreatePost;
