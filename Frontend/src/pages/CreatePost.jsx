import React from "react";

export const CreatePost=()=>{

    const handleSubmit= async (e)=>{
        e.perventDefaulter()
    }
    return(
        <section className="create-post-section">
            <h1>Create post</h1>

            <form>
                <input type="file" name="image" accept="image/*" />
                <input type="text" name="caption" required placeholder="Enter Caption"/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
