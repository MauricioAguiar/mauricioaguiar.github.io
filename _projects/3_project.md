---
layout: page
title: 'Data Analysis: Client VM'
description: Data insights for a client 
img: assets/img/clientvm/output.png
importance: 3
category: work
images:
  lightbox2: true
---

<section id="overview">
    <h2>Project Overview</h2>
    <p>This project focuses on analyzing data related to an influencer's work in 2024. The goal is to explore the data to identify areas for improvement and create a predictive model to estimate monthly earnings based on hours worked.</p>
</section>


<section id="objective">
    <h2>Objectives</h2>
    <ul>
        <li><strong>Exploring the client's data to extract useful insights about their work in 2024.</strong></li>
        <li><strong>Improve and guide their work in 2025 based on the results provided by this analysis.</strong></li>
        <li><strong>Perform exploratory data analysis to create a predictive model for estimating monthly earnings based on hours worked.</strong></li>
    </ul>
</section>

<section id="tools">
    <h2>Troughout this project various libraries were used this was the main ones</h2>
    <ul>
        <li><strong>NumPy </strong>: For numerical computations.</li>
        <li><strong>Pandas </strong>: For data manipulation and analysis.</li>
        <li><strong>SeaBorn </strong>: For data visualization.</li>
        <li><strong>Matplotlib </strong>: For creating plots and charts.</li>
        <li><strong>Scikit-learn </strong>: For machine learning tasks, including linear regression, random forest regression, and model evaluation metrics.</li>
        <li><strong>Prophet </strong>: For time series forecasting.</li>       
    </ul>
</section>

<section id="data">
    <h3>The data was splitted between to databases one given by the client's website with more direct data and the other one filled by client with more contextual data</h3>
    <p>This were the main data extracted used on this project</p>
    <ol>
        <li><strong>Date </strong></li>
        <li><strong>Hours worked by Day</strong></li>
        <li><strong>Times of day</strong></li>
        <li><strong>Tokens earned</strong></li>
        <li><strong>Tokenage types</strong></li>
        <li><strong>Weeks (custom splitted up by client)</strong></li>
        <li><strong>Observations about the worked days</strong></li>
    </ol>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clientvm/Data_used.png" title="Data used" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">The main data used to insights extraction.</div>
</section>
<section id="data_filtering">
    <h1>Data Treatment</h1>
    <p>The Original data had some unusable data at current state so some treatment was necessary, the list below was the main treatment used</p>
    <ol>
        <li><strong>Drop rows that were unusable to the project purpose and NaN values as well</strong></li>
        <li><strong>Data was splitted by Year, Month, Days and  Hours </strong></li>
        <li><strong>Non categorical data were converted to categorical</strong></li>
        <li><strong>Some unique values ​​were grouped to make the data more concise with the project context</strong></li>
        <li><strong>String values were converted to Numeric values</strong></li>
        <li><strong>Some values were renamed to more be assertive with the project idea</strong></li>
    </ol>
</section>

<section id="data_analysis">
    <h2>Data Loading and Initial Exploration</h2>
    <p>The data is loaded into a Pandas DataFrame, and initial exploration is performed to understand the structure and content of the data.</p>
    <h2>Grouping and Aggregation</h2>
    <ol>
        <li><strong>Tokens are grouped by tokenaged types and summed to identify the most profitable type.</strong></li>
        <li><strong>Tokens are grouped by times of day  to analyze earnings by these times day.</strong></li>
        <li><strong>Tokens are grouped by month and week to analyze trends over time.</strong></li> 
        <li><strong>Tokens are grouped by minute to be used in more depth analysis.</strong></li>         
    </ol>
    <h2>Visualization</h2>
    <p>The data is loaded into a Pandas DataFrame, and initial exploration is performed to understand the structure and content of the data.</p>
    <div class="row">
    <a class="col-sm mt-3 mt-md-0" data-lightbox="data" href="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Sum_tokens_by_meio.png">
        <img class="col-sm mt-3 mt-md-0" src="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Sum_tokens_by_meio.png" />
        <div class="caption">Tokens by ways to tokenize: A line plot shows the sum of tokens earned by each way.</div>
    </a>
    <a class="col-sm mt-3 mt-md-0" data-lightbox="data" href="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_mean_by_minXTokens_mean_worked.png">
        <img class="col-sm mt-3 mt-md-0" src="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_mean_by_minXTokens_mean_worked.png" />
        <div class="caption">Tokens per Minute Worked: A bar plot shows the average tokens earned per minute worked.</div>
    </a>
    <a class="col-sm mt-3 mt-md-0" data-lightbox="data" href="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_by_minXTokens_mean_worked_monthly.png">
        <img class="col-sm mt-3 mt-md-0" src="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_by_minXTokens_mean_worked_monthly.png" />
        <div class="caption">Monthly Trends: A bar plot shows the average tokens earned per minute by month.</div>
    </a>
        <a class="col-sm mt-3 mt-md-0" data-lightbox="data" href="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_gained_by_day_period.png">
        <img class="col-sm mt-3 mt-md-0" src="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_gained_by_day_period.png" />
        <div class="caption">Weekly Trends: A bar plot shows the average tokens earned per minute by week.</div>
    </a>
        <a class="col-sm mt-3 mt-md-0" data-lightbox="data" href="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_gained_mean_by_day_period.png">
        <img class="col-sm mt-3 mt-md-0" src="https://raw.githubusercontent.com/MauricioAguiar/mauricioaguiar.github.io/refs/heads/main/assets/img/clientvm/Tokens_gained_mean_by_day_period.png" />
        <div class="caption">Period of the Day: Bar plots show total and average tokens earned by period of the day.</div>
    </a>
</section>
<section id="predictive_modeling">
    <h2>Predictive Modeling</h2>
    <h4>Simple Linear Regression</h4>
    <ol>
        <li><strong>A linear regression model is trained to predict tokens earned based on hours worked.</strong></li>
        <li><strong>The model achieves an R² score of 0.79, indicating a strong correlation.</strong></li>       
    </ol>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clientvm/linear_predict.png" title="Data plot" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The data plot used on the linear regression model.</div>
        </div>    
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clientvm/linear_predict_result.png" title="Data plot" class="img-fluid rounded z-depth-1" %}
        <div class="caption">The linear model result.</div>
        </div>
    </div>
    <h4>Time Series Forecasting with Prophet</h4>
    <ol>
        <li><strong>A more complex model using Facebook's Prophet is implemented to incorporate temporal features (e.g., month, sine/cosine transformations).</strong></li>
        <li><strong>Cross-validation is performed to evaluate the model's performance.</strong></li>       
    </ol>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clientvm/prophet_model_result.png" title="prophet model result" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">Prophet model prediction showing the trend by year and by week.</div>
</section>
<section id="insights">
    <h2>Key Insights</h2>
    <ol>
        <li><strong>💵 Most Profitable ways to tokenize: Tips, Gift, and Talk were the most profitable ways, with a significant disparity compared to others.</strong></li>  
        <li><strong>🕑 Optimal Working Hours: The highest average tokens per minute were earned when working between 30 minutes to 1.5 hours per day. Working 8 hours also showed high earnings, but 4.5 hours was the most common.</strong></li>  
        <li><strong>📈 Monthly Trends: May, June, and July were the most profitable months, while December had the lowest earnings.</strong></li>  
        <li><strong>📊 Weekly Trends: The second week of the month was the most profitable, but the differences between weeks were minimal (less than 1 token per minute on average).</strong></li>  
        <li><strong>🌆 Time of Day: Morning was the most productive period, with the highest average tokens earned.</strong></li>       
    </ol>
</section>
<section id="predictive_model_results">
    <h2>Predictive Model Results</h2>
    <h4>Simple Linear Regression</h4>
    <p>Results</p>
    <ol>
        <li><strong>model Intercept = 18.50</strong></li>
        <li><strong>model coeficient = 3.77</strong></li>   
        <li><strong>Equation: Tokens = 18.50 + 3.77 * (Minutes Worked)</strong></li>              
    </ol>
    <p><strong>Example: If 65 hours are worked in a month, the expected tokens earned are 14,723.</strong></p>
    <h4>Prophet Model</h4>
    <ol>
        <li><strong>The Prophet model incorporates temporal features but performed slightly worse than the simple linear regression due to the small dataset size.</strong></li>       
    </ol>
</section>
<section id="future_analysis">
    <h4>Future Analysis</h4>
    <ol>
        <li><strong>The analysis was conducted using one year of historical data. With more data, predictions can be refined and extended to longer periods (e.g., bimonthly or quarterly).</strong></li>
        <li><strong>Additional features, such as audience engagement metrics, could improve the predictive model.</strong></li>       
    </ol>
    <ol>
</section>

<footer>
        <p>For more details, visit the <a href="https://github.com/MauricioAguiar/SignLanguagePT-BR">GitHub repository</a> or check the repositories tab.</p>
</footer>