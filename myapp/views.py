import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Polution, HistoryClick, CoByPosition, AirQualityData, AQI
from django.db.models import Q

timeline = '2018'
series = '四川省'


def index(request):
    return render(request, 'index.html')


def index1(request):
    return render(request, 'index1.html')


def index2(request):
    return render(request, 'index2.html')


def get_data(place, year):
    data_dict = {'SO2': [], 'CO': [], 'PM2_5': [], 'PM10': [], 'NO2': [], 'O3': [], 'AQI': []}
    data = Polution.objects.filter(Q(year__exact=year) & Q(place__contains=place))
    for i in data[:12]:
        data_dict['SO2'].append(i.SO2)
        data_dict['CO'].append(i.CO)
        data_dict['PM2_5'].append(i.PM2_5)
        data_dict['PM10'].append(i.PM10)
        data_dict['NO2'].append(i.NO2)
        data_dict['O3'].append(i.O3)
        data_dict['AQI'].append(i.AQI)
        # data_list.append((i.id, i.place))
        # user_dict = {'data':data_list}
        # ensure_ascii=True会将中文转换为编码 {"user": "\u738b", "password": 123456}
        # json_str = json.dumps(user_dict, ensure_ascii=False)
    # print(data_dict)
    return data_dict


data = ''


def check_data(request):
    if request.method == 'POST':
        global series, timeline
        # print(request.POST.get('componentType'))
        if request.POST.get('componentType') == 'timeline':
            # historyclick = HistoryClick(id=1, content_type='timeline', first_data=request.POST.get('data'))
            # historyclick.save()
            timeline = request.POST.get('name')
        if request.POST.get('componentType') == 'series':
            # data = HistoryClick.objects.all()[0].first_data
            # name = request.POST.get('name')
            # polution_data = get_data(name)
            series = request.POST.get('name')
        print(series, timeline)
        return JsonResponse({'map': series, 'year': timeline, 'polution_data': get_data(series, timeline)})
        # return JsonResponse({'a':1234})


def ceshi(request):
    data_dict = {'SO2': [], 'CO': [], 'PM2_5': [], 'PM10': [], 'NO2': [], 'O3': [], 'AQI': [], 'YEAR': [], 'PLACE': []}
    data = Polution.objects.filter(Q(year__exact='2017') & Q(place__contains='海南省'))
    for i in data:
        # data_dict['SO2'].append(i.SO2)
        # data_dict['CO'].append(i.CO)
        # data_dict['PM2_5'].append(i.PM2_5)
        # data_dict['PM10'].append(i.PM10)
        # data_dict['NO2'].append(i.NO2)
        # data_dict['O3'].append(i.O3)
        # data_dict['AQI'].append(i.AQI)
        data_dict['YEAR'].append(i.year)
        data_dict['PLACE'].append(i.place)
        # data_list.append((i.id, i.place))
        # user_dict = {'data':data_list}
        # ensure_ascii=True会将中文转换为编码 {"user": "\u738b", "password": 123456}
        # json_str = json.dumps(user_dict, ensure_ascii=False)
    # print(data_dict)
    return JsonResponse(data_dict)


def co_data(request):
    data = CoByPosition.objects.all()
    list = {'position': [], 'co': []}
    for i in data:
        list['position'].append(i.position)
        list['co'].append(float(i.co))
    print(list)
    return JsonResponse(list)


def aqi_data(request):
    data = AQI.objects.all()
    list = {'position': [], 'SO2': [], 'CO': [], 'PM25': [], 'PM10': [], 'NO2': [], 'O3': []}
    for i in data:
        list['position'].append(i.position)
        list['SO2'].append(float(i.SO2))
        list['CO'].append(float(i.CO))
        list['PM25'].append(float(i.PM25))
        list['PM10'].append(float(i.PM10))
        list['NO2'].append(float(i.NO2))
        list['O3'].append(float(i.O3))
    print(list)
    return JsonResponse(list)


def co(request):
    data = CoByPosition.objects.all()
    list = {'position': [], 'co': []}
    for i in data:
        list['position'].append(i.position)
        list['co'].append(float(i.co))
    return JsonResponse(list)


def AirQualityDataView(request):
    data = AirQualityData.objects.all()
    list = {'province': [], '1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': [], '10': [],
            '11': [], '12': []}
    for i in data:
        list['province'].append(i.province)
        list['1'].append(i.january)
        list['2'].append(i.february)
        list['3'].append(i.march)
        list['4'].append(i.april)
        list['5'].append(i.may)
        list['6'].append(i.june)
        list['7'].append(i.july)
        list['8'].append(i.august)
        list['9'].append(i.september)
        list['10'].append(i.october)
        list['11'].append(i.november)
        list['12'].append(i.december)
    return JsonResponse(list)


def reli(request):
    return render(request, '热力图.html')

