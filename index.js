const TableData = [
    {category:"Work",sub_category:"Meeting",duration:"42:12",task:"ClientMeeting"},
    {category:"Work",sub_category:"Project",duration:"50:44",task:"-"},
    {category:"Work",sub_category:"Meeting",duration:"42:12",task:"ClientMeeting"},
    {category:"PersonalWork",sub_category:"Meeting",duration:"-",task:"-"},
    {category:"PersonalWork",sub_category:"Project",duration:"20:58",task:"-"},
    {category:"Work",sub_category:"Meeting",duration:"42:12",task:"ClientMeeting"},
    {category:"PersonnalWork",sub_category:"Meeting",duration:"55:12",task:"-"},
    {category:"Work",sub_category:"Meeting",duration:"42:12",task:"ClientMeeting"},
    {category:"Work",sub_category:"-",duration:"10:10",task:"-"},
];

        const tablecontent = document.querySelector('#dataTable tbody');
        const select = document.getElementById('drops');

        function createTable(category) {
            tablecontent.innerHTML = ''; 
            TableData.forEach((data ,index)=> {
                if (data.category === category) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${data.category}</td>
                        <td>${data.sub_category}</td>
                        <td>${data.duration}</td>
                        <td>${data.task}</td>
                    `;
                    tablecontent.appendChild(row);
                }
                if (category === 'All') {
                    const row = document.createElement('tr');

                    row.innerHTML = `
                        <td>${data.category}</td>
                        <td>${data.sub_category}</td>
                        <td>${data.duration}</td>
                        <td>${data.task}</td>
                    `;
                const updateBtn = document.createElement('button');
                updateBtn.textContent = 'UPDATE';
                updateBtn.classList.add('update-btn'); 
                updateBtn.addEventListener('click', () => handleUpdate(index)); 
            
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'DELETE';
                deleteBtn.classList.add('delete-btn'); 
                deleteBtn.addEventListener('click', () => handleDelete(index));
            
                row.appendChild(updateBtn);
                row.appendChild(deleteBtn);
                tablecontent.appendChild(row);
                    
                }
                

            });

        }
        createTable(select.value);
        select.addEventListener('change', function() {
            const selectedCategory = this.value;
            createTable(selectedCategory);
        });
function handleUpdate(index) {
    const newData = { 
        category: prompt("Enter new category") || TableData[index].category,
        sub_category: prompt("Enter new sub category") || TableData[index].sub_category,
        duration: prompt("Enter new duration") || TableData[index].duration,
        task: prompt("Enter new task") || TableData[index].task
    };
    TableData.splice(index, 1, newData);
    createTable(select.value);
}

function handleDelete(index) {
    TableData.splice(index, 1);
    createTable(select.value);
}

createTable(select.value);

select.addEventListener('change', function () {
    const selectedValue = this.value;
    createTable(selectedValue);
});


        
seconds=0;
        minutes=0;
        hour=0;
        isRunning=false;
        function startstopwatch(){
        if(!isRunning){
        
            interval=setInterval(()=>{
                seconds++;
                if(seconds>=60){
                    seconds=0;
                    minutes++;
                    if(minutes>=60){
                        minutes=0;
                        hour++;
                    }
                }
                document.getElementById('button').innerHTML='Stop';
                let formattedTime=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
                document.querySelector(".stopwatch").innerHTML=formattedTime;
                isRunning=true;
            },1000)
        
        }
        else{
        isRunning=false;
        clearInterval(interval);
        document.getElementById('button').innerHTML='Start';
        }
        }                                            

        const resetwatch=()=>{
            clearInterval(interval);
            seconds=0;
            minutes=0;
            hour=0;
            document.getElementById('button').innerHTML='Start';
            let formattedTime=`${hour.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
            document.querySelector(".stopwatch").innerHTML=formattedTime;
        }


        const form = document.querySelector('#taskForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const category = form.elements['category'].value;
    const subCategory = form.elements['subCategory'].value;
    const duration = form.elements['duration'].value;
    const task = form.elements['task'].value;
    const newData = {
        category: category,
        sub_category: subCategory,
        duration: duration,
        task: task
    };
    TableData.push(newData);
    createTable(select.value);
    form.reset();
});


