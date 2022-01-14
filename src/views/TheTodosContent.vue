<template>
  <div>
    <button
        class="go__back-button"
        @click="$router.go(-1)"
    >
      Go Back
    </button>
    <div class="todos">
      <todos-form-interface
          ref="base-user-form"
          class="todos__input"
          @submit-properties="addNewTodo"
      />
      <div class="todos__content">
        <div
            v-for="(todo,index) in todos"
            :key="todo"
        >
          <todos-list-interface
              :todo="todo"
              :index="index"
              @delete-todo="deleteTodo"
              @edit-todo="editTodo"
              @dropped-todo="setDroppedTodo"
              @dragged-todo="setDraggedTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodosFormInterface from "@/components/TodosFormInterface";
import TodosListInterface from "@/components/TodosListInterface";
export default {
  name:'TheTodosContent',
  components:{
    TodosFormInterface,
    TodosListInterface
  },
  data() {
    return {
      todos:[
          'Wake up Early.',
          'Exercise daily.',
          'Have a healthy breakfast, lunch, and dinner.',
          'Keep room clean.'
      ],
      draggedItemIndex:0,
      droppedItemIndex:0
    }
  },
  methods:{
    addNewTodo({todo,index}){
      if(index !== -1){
        this.todos[index] = todo
      }
      else{
        this.todos.push(todo)
      }
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    editTodo(index){
      const todo = this.todos[index]
      this.$refs['base-user-form'].editAddedTodo({todo,index})
    },
    setDraggedTodo(index){
      this.draggedItemIndex = index
    },
    setDroppedTodo(index){
      this.droppedItemIndex = index
      this.swapTodosPosition()
    },
    swapTodosPosition(){
      const {draggedItemIndex, droppedItemIndex} = this
      const draggedItem = this.todos[draggedItemIndex]
      const droppedItem = this.todos[droppedItemIndex]
      this.todos[droppedItemIndex] = draggedItem
      this.todos[draggedItemIndex] = droppedItem
    }
  }
}
</script>

<style lang="scss" scoped>
.todos{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 768px;
  width: 100%;

  &__input{
    width: 100%;
  }

  &__content {
    margin: 8px 0 8px 0;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  button{
    cursor:pointer;
  }

  button:active{
    transform: scale(0.95);
  }
}
</style>
