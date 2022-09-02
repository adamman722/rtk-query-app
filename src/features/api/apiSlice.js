import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  //below can be set default api if not defined below
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  //tag types
  ///////////////there is alot to do with tags and you need to read more on them
  //adding tags when working with apis helps the component trigger a re-render when the users updates with a POST,PUT,DELETE
  tagTypes: ["Todos"],
  //builder cases is a technique done for redux
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Todos"],
    }),
    //when we need to do anything but get we use builder.mutation
    // after query that is what the user adds in to make the post or patch
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
