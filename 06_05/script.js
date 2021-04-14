const startDateControl = document.querySelector('input[id="start"]');
const endDateControl = document.querySelector('input[id="end"]');

// Find the next date based on date.
function nextDay(current) {
  let date = new Date(current);
  date = new Date(date.setDate(date.getDate() + 1));
  return date;
}

// Set fields to today and tomorrow to start.
const today = new Date();
const tomorrow = nextDay(today);
startDateControl.value = today.toISOString().split("T")[0];
startDateControl.setAttribute("min", today.toISOString().split("T")[0]);
endDateControl.value = tomorrow.toISOString().split("T")[0];
endDateControl.setAttribute("min", tomorrow.toISOString().split("T")[0]);

// Update end date field when start date is set.
startDateControl.addEventListener("change", (e) => {
  const startDate = new Date(startDateControl.value);
  const nextAvailableDate = nextDay(startDate);
  endDateControl.value = nextAvailableDate.toISOString().split("T")[0];
  endDateControl.setAttribute(
    "min",
    nextAvailableDate.toISOString().split("T")[0]
  );
});
