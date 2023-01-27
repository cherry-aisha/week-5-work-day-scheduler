var currentDay = $('#time-display');

function createTimeSlot() {
    for (var hour = options.startHour; hour <= options.endHour; hour++) {

        //Loads task from local storage
        var savedTask = localStorage.getItem(hour);
        
        var timeSlot = $("<div>").addClass("row time-block");
        timeSlot.attr("data-hour", hour);

        var hourSlot = $("<div>").addClass("col-sm-2 hour").text(moment(hour, "h").format("h A"));
        var description = $("<div>").addClass("col-sm-8 row");
        var textArea = $("<textarea>").addClass("col-md-10 description");
        textArea.vav(savedTask);

        var saveContainer = $("<div>").addClass("saveBtn d-flex justify-content-center align-items-center contain");
        saveContainer.on("click", onSaveTask);
        var saveButton = $("<i>").addClass("fas fa-save");

        timeSlot.append(hourSlot);
        timeSlot.append(description);
        description.append(textArea);
        timeSlot.append(saveContainer);
        saveContainer.append(saveButton);

        $(".container").append(timeslot);
    }
}


/*     <div class="row">
      <div class="col-sm-2 hour">11am</div>
      <div class="col-sm-8 row past">
        <textarea class="col-md-10 description"></textarea>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary saveBtn">Save</button>
      </div>
    </div>
*/