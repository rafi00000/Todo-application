const TaskPage = () => {
  return (
    <div className="my-5">
      <p className="text-right">
        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-sm bg-white border-purple-600 text-violet-600 hover:bg-violet-700 hover:text-white">
           + Create New Task
        </button>
      </p>

    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
    </div>
  );
};

export default TaskPage;
