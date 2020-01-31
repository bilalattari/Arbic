import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import Button from './Button'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
import Modal from 'react-native-modal'

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                que: "ضرب",
                heading : "اسم  فعل اور حرف کی پہچان",
                image : require("./assets/beating.png"),
                correct : false,
                options :  [ {
                name :"اسم" ,
                rightOpt : null,
                options : {
                    a : "الف لام",
                    b : "تنوین",
                    c: 'مضاف',
                    d: ' معرفہ',

                }
                }, 
                 {
                    name :"فعل" , 
                    rightOpt : 'b',
                    options : {
                        a : "مضارع",
                        b : "ماضی",
                        c: 'نکرہ',
                        d: ' معرفہ',
                    }
                    }, 
                 {
                     name :"حرف" , 
                     rightOpt : null,
                     options : {
                            a : "تنوین کا   نہ ہونا ",
                            b : "الف لام کا  نہ ہونا",
                            c: 'معرفہ نہ ہونا',
                            d: 'نکرہ ',
                        }
                    }]  ,
                ok: 1,
            },
            {
                que: "قرآن",
                heading : "اسم  فعل اور حرف کی پہچان",
                image : require("./assets/quran.png"),
                correct : false,
                options :[ {
                name :"اسم" ,
                rightOpt : 'c',
                options : {
                    a : "الف لام",
                    b : "تنوین",
                    c: '(علم(نام)',
                    d: ' معرفہ',

                }
                }, 
                 {
                    name :"فعل" , 
                    rightOpt : null,
                    options : {
                        a : "مضارع",
                        b : "ماضی",
                        c: 'نکرہ',
                        d: ' معرفہ',
                    }
                    }, 
                 {
                     name :"حرف" , 
                     heading : "اسم  فعل اور حرف کی پہچان",
                     rightOpt : null,
                     options : {
                            a : "تنوین کا نہ ہونا ",
                            b : "الف لام کا  نہ ہونا",
                            c: 'معرفہ نہ ہونا',
                            d: 'نکرہ ہونا ',
                        }
                    },  
                ],
                ok: 0,
            },
            {
                que: "فی",
                heading : "اسم  فعل اور حرف کی پہچان",
                correct : false,
                image : require("./assets/fi.png"),
                options : [{
                name :"اسم" ,
                rightOpt : null,
                options : {
                    a : "معرفہ",
                    b : "تنوین",
                    c: '(علم(نام)',
                    d: 'مضاف الیہ',

                }
                }, 
                 {
                    name :"فعل" , 
                    rightOpt : null,
                    options : {
                        a : "مضارع",
                        b : "نکرہ",
                        c: 'علم ',
                        d: ' مضاف الیہ',
                    }
                    }, 
                 {
                     name :"حرف" , 
                     rightOpt : 'd',
                     options : {
                            a : "اسم",
                            b : "علم ",
                            c: 'مضاف',
                            d: 'اسم اور فعل کی علامت کا نہ ہون ',
                        }
                    }], 
                ok: 2,
            }],
            questionToRender: 0,
            resultsArray : [],
            selected : undefined,
            subSelected : undefined ,
            trueAlert: false,
            falseAlert: false,
            showResult : false,
            aClick: false,
            allRight : false,
            isVisible : false,
            bClick: false,
            cClick: false,
            dClick: false
        }
        this.answerArr = []
    }

    anotherQuestion = () => {
        let timeOut = setTimeout(() => {
            this.setState({
                trueAlert: false, falseAlert: false,
                questionToRender: this.state.questionToRender  !== this.state.questions.length - 1  ?  this.state.questionToRender  + 1 : 0
            })
        }, 2000)
    }
    falseAnswer = () => {
        let timeOut = setTimeout(() => {
            this.setState({ trueAlert: false, falseAlert: false })
        }, 2000)
    }
    checkAnswer = (selected, queNum) => {
        const ques = queNum.ok
        if (queNum.type === 'oneChoice') {
            if (selected === ques) {
                this.setState({ trueAlert: true })
                this.anotherQuestion()
            }
            else {
                this.setState({ falseAlert: true })
                this.falseAnswer()
            }
        }
    }
    checkMultiple = (selected, queNum) => {
        let rightAns = 0
        this.answerArr.push(selected)
        console.log(selected, queNum, this.answerArr, queNum.ok)
        if (this.answerArr.length === queNum.ok.length) {
            console.log(this.answerArr.length, this.answerArr, queNum.ok.length, queNum.ok)
            queNum.ok.forEach((data, ind) => {
                this.answerArr.forEach((queData, index) => {
                    if (data === queData) {
                        console.log("lag gaya")
                        rightAns += 1
                    }
                })
            })
            let timeOut = setTimeout(() => {
                if (rightAns === 2) {
                    this.setState({ trueAlert: true })
                    this.anotherQuestion()
                    this.answerArr = []
                    rightAns = 0
                }
                else {
                    this.setState({ falseAlert: true })
                    this.falseAnswer()
                    this.answerArr = []
                    rightAns = 0
                }
            }, 100)
        }
    }

    checkOrder = (selected, queNum) => {
        this.answerArr.push(selected)
        if (this.answerArr.length === queNum.ok.length) {
            if (this.answerArr[0] === queNum.ok[0] && this.answerArr[1] === queNum.ok[1]
                 && this.answerArr[2] === queNum.ok[2] && this.answerArr[3] === queNum.ok[3]) {
                this.setState({ trueAlert: true })
                this.anotherQuestion()
                this.answerArr = []
            }
            else {
                this.setState({ falseAlert: true })
                this.falseAnswer()
                this.answerArr = []
            }
        }
    }


    onPressNext = ()=>{
        let {questionToRender , questions , showResult , selected  , subSelected, resultsArray , } = this.state
        let result = resultsArray
        let question  = questions
        if(selected !== undefined){
            if(questions.length === questionToRender + 1 || questions.length < questionToRender + 1){
                let obj = {
                    selected : questions[questionToRender].options[selected].name,
                    selectedVal : questions[questionToRender].ok === selected ? true : false ,
                    subSelected :questions[questionToRender].options[selected].options[subSelected] ,
                    subSelectedVal : questions[questionToRender].options[selected].rightOpt !== null && questions[questionToRender].options[selected].rightOpt === subSelected ? true : false  ,
                }
                console.log('obj',subSelected,
                questions[questionToRender].options[selected].rightOpt ,questions[questionToRender].options[selected].rightOpt    )

                result.push(obj)
                var filter = result.filter((data)=> data.selectedVal && data.subSelectedVal)
                if(obj.selectedVal &&obj.subSelectedVal ){
                    question[questionToRender].correct = true
                }
                this.setState({showResult : true , 
                     selected : undefined , resultsArray : result ,
                    allRight : filter.length === questions.length ? true : false,
                     questions : question,
                     subSelected : undefined })
            }
            else{

                let obj = {
                    selected : questions[questionToRender].options[selected].name,
                    selectedVal : questions[questionToRender].ok === selected ? true : false ,
                    subSelected :questions[questionToRender].options[selected].options[subSelected] ,
                    subSelectedVal : questions[questionToRender].options[selected].rightOpt !== null && questions[questionToRender].options[selected].rightOpt === subSelected ? true : false  ,
                }
                result.push(obj)
                console.log('obj',subSelected,
                questions[questionToRender].options[selected].rightOpt ,
                questions[questionToRender].options[selected].rightOpt    )

                if(obj.selectedVal &&obj.subSelectedVal ){
                    question[questionToRender].correct = true
                } 
                this.setState({questionToRender : questionToRender + 1 ,
                     selected : undefined , resultsArray : result , questions : question,
                     subSelected : undefined })
            }
        }
        else{
            alert("Please select any part")
        }
    }
    render() {
        let {selected , questions , questionToRender ,showResult , 
            isVisible , subSelected , resultsArray , allRight} = this.state
        let questionShow = questions[questionToRender].correct ?  questionToRender + 1 :  questionToRender
        var questionToShow = questions[questionShow]
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <Modal isVisible={isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                >
          <View style={{ minHeight :300 , width : "100%" , borderRadius :25,
          alignSelf : "center" , backgroundColor : "#fff" , padding : 25 }}>
                    <Text style = {[styles.text , { fontSize : 26 , marginVertical : 12}]}>  یہ کلمہ {selected !== undefined ?  questionToShow.options[selected].name : 0} کیوں ہے؟   </Text>
                    {
                       selected !== undefined  ?  Object.keys(questionToShow.options[selected].options).map((que , index)=>
                        <TouchableOpacity 
                        key = {index}
                        onPress = {()=> this.setState({subSelected : que } , 
                            ()=> setTimeout(()=> this.setState({isVisible : false}) , 700))}
                        style = {[styles.questionChoice ,
                         {backgroundColor : subSelected === que ? '#4F92CA' : "#fff"}]}> 
                               <Text style = {[styles.text , {color : subSelected === que ? '#fff' : "#4F92CA"}]}>{questionToShow.options[selected].options[que]}</Text>
                        </TouchableOpacity>) : null
                    }
          </View>
        </Modal>

                {
                    showResult ? 
                    <View>
                    <Text style = {[styles.text , styles.heading]}> نتیجہ</Text>
                    <View style  = {{flexDirection : "row" , marginVertical : 12 }}>
                    <Text style = {[styles.text , {width : 40 , textAlign : "center" } ]}></Text>
                    <Text style = {[styles.text , {width : 120 , textAlign : "center" } ]}>جواب</Text>
                    <Text style = {[styles.text , {width : 120 , textAlign : "center" } ]}>جواب کی وجہ</Text>
                        </View>
                        {
                            resultsArray.map((data , index)=>
                            <View style  = {{flexDirection : "row" , marginVertical : 6 }}>
    <Text style = {[styles.text , {width : 40 , textAlign : "center" } ]}>{index  + 1}</Text>
                    <View style = {[{width : 120 , alignItems : "center" , justifyContent : "center" } ]}>
                        <Icon name  = {data.selectedVal ? "check" :"times" } size  = {25}
                         color = {data.selectedVal ?  "green" : 'red'} />
                     </View>
                    <View style = {[{width : 120 , alignItems : "center" , justifyContent : "center" } ]}>
                    <Icon name  = { data.subSelectedVal ?  "check" : 'times'} size  = {25} color = {data.subSelectedVal ?  "green" : 'red'} />
                        </View>
                        </View>
                            )
                        }
                        
                        <TouchableOpacity style  = {[styles.questionChoice , {width : '70%' , minHeight : 45 ,
                         backgroundColor : "#4F92CA"  , marginTop : 41}]} 
                         onPress = {()=> {
                             if(!allRight){
                                 this.setState({showResult : false , 
                                    questionToRender : questions[0].correct  === false ? 0 :questions[1].correct  === false ? 1 
                                    :questions[2].correct  === false ? 2 : null   })
                             }
                         }} >
                            <Text style = {[styles.text , {color :'#fff' ,fontSize : 18}]}> 
                            {allRight ? "اگلا سبق" : 'دوبارہ کوشش کریں'}</Text>
                            </TouchableOpacity>
                        </View>
                        :
                <View>
                    <Text style = {[styles.text , styles.heading]}> {questionToShow.heading}</Text>
                    <Image source = {questionToShow.image} style = {[styles.image ]} />
                    <Text style = {[styles.text , { fontSize : 41 , marginVertical : 12}]}> {questionToShow.que}</Text>
                    {
                        questionToShow.options.map((que , index)=>
                        <TouchableOpacity 
                        key = {index}
                        onPress = {()=>{ 
                            this.setState({selected : index , isVisible : true })
                            console.log(que.options , 'que.options')
                        }
                        }
                        style = {[styles.questionChoice , {backgroundColor : selected === index ? '#4F92CA' : "#fff"}]}> 
                               <Text style = {[styles.text , {color : selected === index ? '#fff' : "#4F92CA"}]}>{que.name}</Text>
                        </TouchableOpacity>)
                    }
                    <TouchableOpacity
                    onPress = {()=> this.onPressNext()}
                    style = {[styles.questionChoice , styles.next]}>
                      <Text style = {[styles.text , {color : '#fff' , fontSize : 16}]}>{questions.length === questionToRender + 1 ? "Done" : "Next" }</Text>
                        </TouchableOpacity>
              </View>
                }
            </ScrollView>
        )
    }
}


export default Questions

const styles = StyleSheet.create({
    questionChoice: {
    minHeight : 50 , width : '90%' , borderRadius : 25 ,
    padding : 6,
        borderColor : '#4F92CA' , borderWidth : 1, alignSelf : 'center' ,
         alignItems : 'center'  , marginVertical : 5,
         justifyContent : 'center'
    },
    choiceText: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'right',
        paddingRight: 15,
    },
    queText: {
        fontSize: 20,
        fontWeight: '700',
    },
    text : {color : "#4F92CA"  , fontSize : 21 , fontWeight : "bold" , 
    alignSelf : "center" , },
    image : {height : 170 , width : 225 , alignSelf : "center" , resizeMode : 'contain',
     resizeMode : "contain" , borderRadius : 12 , marginVertical : 12},
    next : {minHeight : 41 , width : '21%' ,
    alignSelf : 'flex-end' , 
   marginVertical : 12 , marginRight : 25 ,
    backgroundColor : '#4F92CA' },
    heading : {width : '100%' , backgroundColor : '#4F92CA' , paddingVertical : 12, color : "#fff" ,
    marginVertical : 0 , textAlign : 'center'}
})