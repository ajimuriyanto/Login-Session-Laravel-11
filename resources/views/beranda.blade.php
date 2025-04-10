@extends('layouts.app')
    @section('content')
        <!--begin::Content-->
        <div class="content d-flex flex-column flex-column-fluid" id="kt_content">						
            <!--begin::Post-->
            <div class="post d-flex flex-column-fluid" id="kt_post">
                <!--begin::Container-->
                <div id="kt_content_container" class="container-xxl">                                
                    <div class="row g-5 g-xxl-8">
                        <div class="col-xl-4">
                            <div class="card mb-5 mb-xxl-8">
                                <div class="card-header border-0">
                                    <h3 class="card-title fw-bolder text-dark">Kalender</h3>
                                </div>                                                                                    
                                <div class="card-body pb-0">                                                                                                                                                                    
                                </div>
                            </div>
                        </div>
                                                                                                                                                        
                        <div class="col-xl-8">
                            <div class="card mb-5 mb-xxl-8">
                                <div class="card-body">
                                    <div id="kt_calendar_widget_1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Container-->
            </div>
            <!--end::Post-->
        </div>
        <!--end::Content-->            
    @stop