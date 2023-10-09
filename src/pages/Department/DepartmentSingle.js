import React from 'react';
import PageTitle from '../../composants/pageTitle';
import Paragraph from '../../composants/paragraphe';
import Liste from '../../composants/liste';
import SidebarWidget from '../../composants/sidebarWidget';
import bg from '../../assets/images/services/bg-1.jpg';


function Departments() {

    const propsPageTitle = {
        subtitle: 'Department Details',
        title: 'Single Department'
    }

    const propsParagraphe = {
        title: 'Medecine and Health',
        subContent:'Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection.',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.',
    }

    const propsListe = {
        title:'Services features',
        items: [
            'International Drug Database',
            'Stretchers and Stretcher Accessories',
            'Cushions and Mattresses',
            'Cholesterol and lipid tests',
            'Critical Care Medicine Specialists',
            'Emergency Assistance',
        ],
        buttonContent:'Book An Appointment'
    }

    const propsSidebarWidget = {
        title:'Time Schedule',
        horraires:[
            {
                days:'Monday - Friday',
                hours:'9:00 - 17:00',
            },
            {
                days:'Saturday',
                hours:'9:00 - 16:00',
            },
            {
                days:'Sunday',
                hours:'Closed',
            }
        ],
        infos:{
            message :'Need Urgent Help?',
            number:'+23-4565-65768'
        }
    }

    return (
        <main style={{ marginTop: '135.6px' }}>
            <PageTitle
                propsPageTitle={propsPageTitle}
            />
            <section class="section department-single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="department-img">
                                <img src={bg} alt="" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                
                    <div class="row">
                        <div class="col-lg-8">
                            <Paragraph
                                propsParagraphe={propsParagraphe}
                            />
                            <Liste
                                propsListe={propsListe}
                            />
                        </div>
                        <SidebarWidget
                            propsSidebarWidget={propsSidebarWidget}
                        />
                    </div>  
                </div>
            </section>
        </main>
    );
}

export default Departments;