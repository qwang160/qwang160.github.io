function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let lat = document.getElementById("latitude").value.trim();
  let lon = document.getElementById("longitude").value.trim();
  let submit = true;

  function val(value, min, max, str, str2) {
    let node = document.querySelector(str2);
    if (node.childElementCount > 1) {
      node.removeChild(document.querySelector(str2 + ">.warning"));
    }

    if (parseFloat(value) != value || value < min || value > max) {
      let warning =
        "must be a valid " +
        str +
        "(" +
        min.toString() +
        " to " +
        max.toString() +
        ")";
      let span = document.createElement("span");
      span.setAttribute("class", "warning");
      let text = document.createTextNode(warning);
      span.appendChild(text);
      node.appendChild(span);

      return false;
    }

    return true;
  }
  let a = val(lat, -90, 90, "Latitude", ".latVal");
  let b = val(lon, -180, 180, "Longitude", ".lonVal");
  submit = a && b;

  return submit;
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
