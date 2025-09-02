'use client'

import { useState } from "react"

export default function Post() {
    //post lists
    const [posts, setPosts] = useState([
        {
            id: 1, title: 'React', body: 'This is react Post'
        },
        {
            id: 2, title: 'Angular', body: 'This is Angular Post'
        }
    ])
    const [isEditing, setIsEditing] = useState(false)

    const [form, setForm] = useState({ title: '', body: '', id: null })

    //handleEdit
    const handleEdit = (post) => {
        // edit logic goes here
        setIsEditing(true)
        setForm({ title: post.title, body: post.body, id: post.id })
    }
    //handleDelete
    const handleDelete = (id) => {
        console.log('delete')
        setPosts(posts.filter(post => post.id !== id))
    }
    //submit
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //here you have handle either add or update logic
        isEditing ? updatePost() : addPost()
    }
    const updatePost = () => {
        setPosts(posts.map(post => (post.id === form.id ? form : post)))
        setForm({ title: '', body: '', id: null })
        setIsEditing(false)
    }
    const addPost = () => {
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //clear the form fields
        setForm({ title: '', body: '', id: null })
    }

    return <>
        {/* Form to add new Post /Edit Existing Post */}
        {/* {JSON.stringify(form)} */}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={e => {
                    setForm({ ...form, title: e.target.value })
                }} placeholder="Title" value={form.title}></input>
            </div>
            <div>
                <textarea placeholder="Body" onChange={e => {
                    setForm({ ...form, body: e.target.value })
                }} value={form.body} />
            </div>
            <div>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {isEditing ? "Update" : "Add"} Post
                </button>
            </div>
        </form>

        {/* List of Posts */}
        {
            posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                            handleEdit(post)
                        }}
                    >Edit</button>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => {
                            handleDelete(post.id)
                        }}
                    >Delete</button>
                </li>
            })
        }
    </>
}