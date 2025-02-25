---
layout: page
title: Brazilian Sign Language Detection
description: Using Deep Learning to recognize gestures in LIBRAS (Língua Brasileira de Sinais).
img: assets/img/signlanguagept-br/mediapipe-detection.png
importance: 2
category: study
related_publications: false
---

<section id="overview">
    <h2>Project Overview</h2>
    <p>This project leverages deep learning techniques to detect and classify hand gestures used in Brazilian Sign Language (LIBRAS). The system processes video streams or images, identifies hand landmarks, and predicts the corresponding gesture using a trained neural network.</p>
</section>

<section id="methodology">
    <h2>Methodology</h2>
    <ol>
        <li><strong>Dependencies:</strong> The project uses libraries such as TensorFlow, MediaPipe, OpenCV, and scikit-learn for model training and gesture recognition.</li>
        <li><strong>Data Preparation:</strong> A dataset of hand gestures is preprocessed and augmented to improve model robustness.</li>
        <li><strong>Model Training:</strong> A neural network is trained to classify gestures based on extracted features from hand landmarks.</li>
        <li><strong>Real-Time Detection:</strong> The system integrates with a webcam or video feed to perform real-time gesture recognition.</li>
    </ol>
</section>

<section id="landmark-detection">
    <h2>Landmark Detection</h2>
    <p>Using MediaPipe and OpenCV, the system detects hand landmarks in real-time. These landmarks are essential for extracting features used in gesture classification.</p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/mediapipe-detection.png" title="Landmark Detection Example" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">Example of detected hand landmarks using MediaPipe and OpenCV.</div>
</section>

<section id="gesture-capture">
    <h2>Gesture Capture</h2>
    <p>Captured gestures are saved as input data for model training. Each gesture is labeled and stored in a structured format, ensuring consistency and accuracy during training.</p>
</section>

<section id="model-details">
    <h2>Model Details</h2>
    <p>The model is built using a Sequential architecture, combining LSTM layers for temporal feature extraction and Dense layers for classification. The following configurations were used:</p>
    <ul>
        <li><strong>Optimizer:</strong> Adam</li>
        <li><strong>Loss Function:</strong> categorical_crossentropy</li>
        <li><strong>Metrics:</strong> categorical_accuracy</li>
    </ul>
    <p>This architecture ensures effective learning of temporal dependencies in the gesture data.</p>
    <div class="row">
        <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/summary.png" title="Model Summary" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">Model summary showing total parameters, trainable parameters, and non-trainable parameters.</div>
    <h3>Training Progress</h3>
    <p>The model was trained for 537 epochs, achieving convergence in both categorical accuracy and loss reduction:</p>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/categorical_accuracy.png" title="Categorical Accuracy per Epoch" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Categorical accuracy over epochs.</div>
        </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/loss_reduction.png" title="Loss Reduction per Epoch" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Loss reduction over epochs.</div>
        </div>        
    </div>
</section>

<section id="results">
    <h2>Results</h2>
    <p>The model successfully detects and classifies gestures with high accuracy. Below are examples of the detection pipeline for different gestures:</p>
    <div class="row">
        <div class="col-sm-3 mt mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/detection_ola-oi.png" title="Gesture Detection: Oi/Olá" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Detection of the gesture "Oi/Olá".</div>
        </div>
        <div class="col-sm-3 mt mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/detection_obrigado.png" title="Gesture Detection: Obrigado" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Detection of the gesture "Obrigado".</div>
        </div>
        <div class="col-sm-3 mt mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/detection_eu-te-amo.png" title="Gesture Detection: Eu te amo" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Detection of the gesture "Eu te amo".</div>
        </div>
        <div class="col-sm-3 mt mt-md-0">
            {% include figure.liquid loading="eager" path="assets/img/signlanguagept-br/detection_sem-input.png" title="Gesture Detection: Sem Input" class="img-fluid rounded z-depth-1" %}
            <div class="caption">Detection when no gesture is input ("Sem Input").</div>
        </div>
    </div>
    <p>Further optimization is ongoing to improve detection speed and accuracy in real-world scenarios.</p>
</section>

<section id="future-work">
    <h2>Future Work</h2>
    <ul>
        <li>Expand the dataset to include more gestures and variations.</li>
        <li>Integrate the system into a mobile or web application for broader accessibility.</li>
        <li>Improve robustness to handle complex backgrounds and lighting conditions.</li>
    </ul>
</section>

<footer>
        <p>For more details, visit the <a href="https://github.com/MauricioAguiar/SignLanguagePT-BR">GitHub repository</a> or check the repositories tab.</p>
</footer>
