document.addEventListener("DOMContentLoaded", function () {

  const calendar = new FullCalendar.Calendar(
    document.getElementById("calendar"),
    {
      initialView: "dayGridMonth",
      editable: true,
      selectable: true,
      eventResizableFromStart: true,
      events: window.calendarEvents,

      eventDrop: saveEvent,
      eventResize: saveEvent
    }
  );

  calendar.render();

function saveEvent(info) {
  fetch("/api/update_event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: info.event.id,
      start: info.event.start.toISOString(),
      end: info.event.end.toISOString()
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      showToast("✅ Event updated successfully");
    } else {
      showToast("❌ Update failed", "error");
      info.revert();
    }
  })
  .catch(() => {
    showToast("❌ Server error", "error");
    info.revert();
  });
}


});
