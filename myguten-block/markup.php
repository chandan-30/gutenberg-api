<?php 
    //HTML markup to be rendered on frontend
    $html = '<div class="container-box">
                <div class="box">
                    <h3>' . $attributes['content'] . '</h3>
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