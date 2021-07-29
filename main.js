var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg,data:image/jpeg;base64","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtC9Hr8wA7zelpgJQju785QqUu1vi1imdDg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0C-2C0SaL_i0yIAA7tvwPfRrvCdsMktldg&usqp=CAU","https://i.postimg.cc/JnL6wtrd/sister.jpg"]
var names = ["Family book","Mom","Father","Grandfather","Grandmother","Son","Daughter"]
var j = 0;
function next(){
    j++;
    var num_of_family_member_in_array = 7
    if(j > num_of_family_member_in_array)
    {
        j=0
    }
    var UpdatingName = names[j];
    var UpdatingImage = images[j];
    document.getElementById("all_family_members").src= UpdatingImage;
    document.getElementById("family_members_names").innerHTML = UpdatingName;

}