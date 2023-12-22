import ToDoForm from "./ToDoForm";

const TaskPage = () => {
  return (
    <div className="my-5">
      <p className="text-right">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn btn-sm bg-white border-purple-600 text-violet-600 hover:bg-violet-700 hover:text-white"
        >
          + Create New Task
        </button>
      </p>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* to do form */}
          <ToDoForm></ToDoForm>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                id="close-btn"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>

      {/* task container */}
      <div>
          <div>
              
          </div>

          <div>

          </div>

          <div>

          </div>
      </div>
    </div>
  );
};

export default TaskPage;
