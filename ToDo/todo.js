var jobs = [
    "Quét nhà lần 1",
    "Lau nhà lần 1",
    "Quét nhà lần 2",
    "Lau nhà lần 2",
]

function renderJob(){
    let tbJob = document.querySelector('.table>tbody');
    let htmls = jobs.map(function(job, index){
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${job}</td>
                    <td>
                        <a href="#">Done</a>
                        <a href="#">Remove</a>
                    </td>
                </tr>
                `
    })

    tbJob.innerHTML = htmls.join("");
}

renderJob();