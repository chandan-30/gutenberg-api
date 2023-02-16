<?php 
    //HTML markup to be rendered on frontend
    $html = '<div class="container-box">
                <div class="box">
                    <h4>' . $attributes['content'] . '</h4>
                    <p>' . $attributes['description'] . '</p>
                    <ul>
                        <li>' . $attributes['support'] . '</li>
                        <li>' . $attributes['email'] . '</li>
                    </ul>
                    <section class="price"> 
                        <span> <s> $59.99 </s> </span>
                        <h2>' . $attributes['price'] . '</h2>
                    </section>
                    ' . $content . '
                    
                </div>
            </div>';
    

    echo $html;
?>