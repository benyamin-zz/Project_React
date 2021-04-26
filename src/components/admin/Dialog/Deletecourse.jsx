import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useDispatch } from 'react-redux';
import { DeleteCourse } from '../../../actions/courses';


const Deletecourse = ({openDialog,closeDialog,course}) => {
  const dispatch = useDispatch()

    return (
        <div>
            <DialogOverlay isOpen={openDialog} onDismiss={closeDialog}>
        <DialogContent
          aria-label="Announcement"
          style={{
            border: "solid 5px hsla(0, 0%, 0%, 0.5)",
            borderRadius: "10px",
          }}
        >
            <div className="card text-center">
                    <h3 style={{ fontSize: "2rem" }}>
                        پاک کردن دوره {course.title}
                    </h3>
                    <hr />
                    <p> مطمئن هستی می خوای دوره {course.title} رو پاک کنی؟</p>
                </div>
                <button
                    className="btn btn-danger "
                    style={{ margin: "1em" }}
                    onClick={() =>
                        dispatch(DeleteCourse(course._id)) &&
                        closeDialog()
                    }
                >
                    مطمئنم پاک کن
                </button>
                <button
                    className="btn btn-warning mr-5"
                    style={{ margin: "1em" }}
                    onClick={closeDialog}
                >
                    انصراف
                </button>
        </DialogContent>
      </DialogOverlay>
        </div>
    );
}

export default Deletecourse;
