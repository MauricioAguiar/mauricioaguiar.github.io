---
layout: page
title: Book Judge
description: Sentiment Analysis algorithm to determine how good is a book judging only by its cover
img: assets/img/book-judge_project/proj1-2.png
importance: 1
category: study
related_publications: true
---

  The idea for this project was inspired by the well-known expression, "Don't judge a book by its cover." However, we often unconsciously do this. With this in mind, I decided to create an algorithm using machine learning to detect, crop, and reposition images of books. Then, using {% cite nima %} NIMA (Neural Image Assessment), the algorithm evaluates the quality of the book cover after proper image treatment.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/preoutput.png" title="Image before detection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image show the some sample photos taken to be later trained
</div>

After gathering and labeling some images, I realized my dataset was smaller than desired. To address this, I used data augmentation to increase the dataset size without compromising model training or causing overfitting. This process expanded the dataset from 92 images to over 3,000 variations.<br>
These images went through two types of training (classification and regression) and then I choose the most suitable model for my project.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/proj1-1.png" title="Total Loss through batches" 
        class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/proj1-2.png" title="Total Classification Loss through batches" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/proj1-3.png" title="Total Regression Loss through batches" 
        class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    These graphs show the progress in error reduction during the batches and you can see that classification gave a better result than regression.
</div>

And from that, this was the result:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/output.png" title="Image book detection" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The red square represent the computer vision that detected the book
</div>
Just for a test purpose I run this model to detect any book captured with my webcam to see if was even able to detect in a video stream and the result was positive!
<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/detection.png" title="Image book detection" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/book-judge_project/detection-cut.png" title="Image book detection cut" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Then I ran the training for a longer epochs to improve detection and then integrated it with the trained NIMA model to compare and make the "judgment" of the book cover, this was the result:

<div class="row justify-content-sm-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/book-judge_project/result.png" title="result image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/book-judge_project/predictedxresult.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The left image was the judgment score from 0 to 10 and the right image show to us the expected prediction versus the actual prediction.
</div>

I was very pleased with the results, as it seems to judge elements that are easy to distinguish more accurately; elements that blend together without a precise shape seem to receive a lower score.
As points for future improvement, the detection could go further and return the real cover with high quality through internet research and then make the judgment. Another point is, since this project was done in 2022, the state of AI was still not very accessible for study or everyday uses, but it would be possible to make a judgment with a more artistic basis rather than purely aesthetic as was the case with this project.

<p>For more details, visit the <a href="https://github.com/MauricioAguiar/Book-Judge">GitHub repository</a> or check the repositories tab.</p>
