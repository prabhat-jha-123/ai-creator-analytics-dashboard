fetch("analytics.json")

.then(response => response.json())

.then(data => {

    // ---------------- METRICS ----------------

    const metricsContainer =
        document.getElementById("metricsContainer");

    metricsContainer.innerHTML = `

        <div class="card">
            <h2>${data.metrics.views}</h2>
            <p>Total Views</p>
        </div>

        <div class="card">
            <h2>${data.metrics.subscribers}</h2>
            <p>Subscribers</p>
        </div>

        <div class="card">
            <h2>${data.metrics.channels}</h2>
            <p>Channels Managed</p>
        </div>

        <div class="card">
            <h2>${data.metrics.ctr}</h2>
            <p>Average CTR</p>
        </div>

    `;

    // ---------------- CHART ----------------

    const labels =
        data.videos.map(video => video.title);

    const views =
        data.videos.map(video => video.views);

    const ctx =
        document.getElementById("viewsChart");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "Views",

                data: views,

                backgroundColor: [
                    "#6C63FF",
                    "#8B5CF6",
                    "#A855F7",
                    "#7C3AED",
                    "#9333EA"
                ],

                borderRadius: 10

            }]
        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {
                        color: "white"
                    }
                }
            },

            scales: {

                y: {

                    ticks: {

                        color: "white",

                        callback: function(value) {

                            if(value >= 1000000){
                                return value / 1000000 + "M";
                            }

                            if(value >= 1000){
                                return value / 1000 + "K";
                            }

                            return value;
                        }
                    },

                    grid: {
                        color: "rgba(255,255,255,0.08)"
                    }
                },

                x: {

                    ticks: {
                        color: "white"
                    },

                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    }
                }
            }
        }
    });

});