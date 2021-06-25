name_of_the_guests_array = [];

function submit() {
    var display_guests_array = [];

    for (var j = 1; j <= 4; j++) {
        var name_of_the_guests = document.getElementById("name_of_the_guests_" + j).value;
        console.log(name_of_the_guests);
        name_of_the_guests_array.push(name_of_the_guests);
    }

    console.log(name_of_the_guests_array);
    var lenght_of_name_of_guests_array = name_of_the_guests_array.length;
    console.log(lenght_of_name_of_guests_array);

    for (var k = 0; k < lenght_of_name_of_guests_array; k++) {
        display_guests_array.push("<h4>NAME -" + name_of_the_guests_array[k] + " </h4>");
        console.log(display_guests_array);
    }

    console.log(display_guests_array);
    var remove_commas = display_guests_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_of_the_guests_array.sort();
    console.log(name_of_the_guests_array)
    var display_guests_array_sorting = [];
    var lenght_of_name_of_guestss_array = name_of_the_guests_array.length;
    console.log(lenght_of_name_of_guestss_array);
    for (var k = 0; k < lenght_of_name_of_guestss_array; k++) {
        display_guests_array_sorting.push("<h4>NAME -" + name_of_the_guests_array[k] + " </h4>");
        console.log(display_guests_array_sorting);
    }
    var remove_commas = display_guests_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array + "</h1>";
}