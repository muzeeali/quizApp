var obt=0;
var total="Total Marks = 100";
var correct=0;
var wrong=0;

function next(){
    if (document.getElementById("q1a").checked)
      {  
        obt+=10
    correct++;
    }
else
wrong++;
var q1=document.getElementById("q1")
var q2=document.getElementById("q2")
q1.className="hide"
q2.className="show"

    }


    function next1(){
        if (document.getElementById("q2b").checked)
          {  
            obt+=10
            correct++;
        }
    else
    wrong++;
    var q1=document.getElementById("q2")
    var q2=document.getElementById("q3")
    q1.className="hide"
    q2.className="show"
        }
            
    function next2(){
        if (document.getElementById("q3c").checked)
          {  
            obt+=10
            correct++;
        }
    else
    wrong++;
    var q1=document.getElementById("q3")
    var q2=document.getElementById("q4")
    q1.className="hide"
    q2.className="show"
        }
    
        function next3(){
            if (document.getElementById("q4b").checked)
              {  
                obt+=10
                correct++;
            }
        else
        wrong++;
        var q1=document.getElementById("q4")
        var q2=document.getElementById("q5")
        q1.className="hide"
        q2.className="show"
            }

            function next4(){
                if (document.getElementById("q5a").checked)
                  {  
                    obt+=10
                    correct++;
                }
            else
            wrong++;
            var q1=document.getElementById("q5")
            var q2=document.getElementById("q6")
            q1.className="hide"
            q2.className="show"
                }



                function next5(){
                    if (document.getElementById("q6c").checked)
                      {  
                        obt+=10
                        correct++;
                    }
                else
                wrong++;
                var q1=document.getElementById("q6")
                var q2=document.getElementById("q7")
                q1.className="hide"
                q2.className="show"
                    }


                    function next6(){
                        if (document.getElementById("q7b").checked)
                          {  
                            obt+=10
                            correct++;
                        }
                    else
                    wrong++;
                    var q1=document.getElementById("q7")
                    var q2=document.getElementById("q8")
                    q1.className="hide"
                    q2.className="show"
                        }

                        function next7(){
                            if (document.getElementById("q8a").checked)
                              {  
                                obt+=10
                                correct++;
                            }
                        else
                        wrong++;
                        var q1=document.getElementById("q8")
                        var q2=document.getElementById("q9")
                        q1.className="hide"
                        q2.className="show"
                            }

                            function next8(){
                                if (document.getElementById("q9b").checked)
                                  {  
                                    obt+=10
                                    correct++;
                                }
                            else
                            wrong++;
                            var q1=document.getElementById("q9")
                            var q2=document.getElementById("q10")
                            q1.className="hide"
                            q2.className="show"
                                }

                            function next9(){
                                if (document.getElementById("q10b").checked)
                                  {  
                                    obt+=10
                                    correct++;
                                }
                            else
                            wrong++;
                            var q1=document.getElementById("q10")
                            var q2=document.getElementById("result")
                            q1.className="hide"
                            q2.className="show"
                            var corr= "Correct Ans = "+ correct
                            var marks= "Obtained Marks = "+ obt
                            var wro= "Wrong Ans = "+ wrong
                            document.getElementById("total").innerHTML=  total
                            document.getElementById("marks").innerHTML=  marks
                            document.getElementById("cor").innerHTML=  corr
                            document.getElementById("wro").innerHTML=  wro
                            if(obt>=50)
                           { document.getElementById("remark").innerHTML=  "CONGRATULATIONS!!! You Have Passed"
                           } 
                           else
                          {  document.getElementById("remark").innerHTML=  "OOPS!!! Try Again"
                        }
                                }


     
    